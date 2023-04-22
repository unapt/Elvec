from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from models import (station_pydantic, station_pydanticIn, Station, schedule_pydantic, schedule_pydanticIn, Schedule)

app = FastAPI()

@app.get('/')
def index():
    return {"Msg" : "/docs for API documentation"} 

register_tortoise(
    app,
    db_url = "sqlite://database.sqlite3",
    modules = {"models" : ["models"]},
    generate_schemas = True,
    add_exception_handlers = True
)

@app.post('/station')
async def add_station(station_info: station_pydanticIn):
    station_obj = await Station.create(**station_info.dict(exclude_unset = True))
    response = await station_pydantic.from_tortoise_orm(station_obj)
    return{"status": "ok", "data" : response}

@app.get('/station')
async def get_all_stations():
    response = await station_pydantic.from_queryset(Station.all())
    return{"status": "ok", "data" : response}

@app.get('/station/{station_id}')
async def get_specific_station(station_id: int):
    response = await station_pydantic.from_queryset_single(Station.get(id = station_id))
    return{"status": "ok", "data" : response}

@app.put('/station/{station_id}')
async def update_station(station_id: int, update_info: station_pydanticIn):
    station = await Station.get(id=station_id)
    update_info = update_info.dict(exclude_unset = True)
    station.name = update_info['name']
    station.zip_code = update_info['zip_code']
    station.charger_type = update_info['charger_type']
    station.ownership = update_info['ownership']
    station.location_city = update_info['location_city']
    station.slots_available = update_info['slots_available']
    await station.save()
    response = await station_pydantic.from_tortoise_orm(station)
    return{"status": "ok", "data" : response}

@app.post('/schedule/{station_id}')
async def add_schedule(station_id: int, schedule_details: schedule_pydanticIn):
    station = await Station.get(id = station_id)
    schedule_details = schedule_details.dict(exclude_unset = True)
    schedule_obj = await Schedule.create(**schedule_details, charge_station = station) 
    response  = await schedule_pydantic.from_tortoise_orm(schedule_obj)
    return{"status": "ok", "data" : response}

@app.get('/schedule/')
async def all_schedules():
    response  = await schedule_pydantic.from_queryset(Schedule.all())
    return{"status": "ok", "data" : response}

@app.get('/schedule/{id}')
async def specific_schedule(id: int):
    response = await schedule_pydantic.from_queryset_single(Schedule.get(id = id))
    return{"status": "ok", "data" : response}

@app.put('/schedule/{id}')
async def update_schedule(id: int, update_info: schedule_pydanticIn):
    schedule = await Schedule.get(id = id)
    update_info = update_info.dict(exclude_unset = True)
    schedule.date_time = update_info['date_time']
    schedule.charging_Duration = update_info['charging_Duration']
    await schedule.save()
    response = await schedule_pydantic.from_tortoise_orm(schedule)
    return{"status": "ok", "data" : response}


