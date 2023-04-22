from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator

class Schedule(Model):
    id = fields.IntField(pk = True)
    date_time= fields.DatetimeField(auto_now_add=True)
    plate_no = fields.CharField(max_length = 6)
    charging_Duration = fields.DecimalField(max_digits = 4, decimal_places = 2, default = 1.00)

    charge_station = fields.ForeignKeyField('models.Station', related_name = 'charging_station')


class Station(Model):
    id = fields.IntField(pk = True)
    name = fields.CharField(max_length = 20)
    zip_code = fields.IntField(default = 0)
    charger_type = fields.CharField(max_length = 100)
    ownership = fields.CharField(max_length = 50)
    location_city = fields.CharField(max_length = 50)
    slots_available = fields.IntField(default = 24)


schedule_pydantic = pydantic_model_creator(Schedule, name = "Schedule")
schedule_pydanticIn = pydantic_model_creator(Schedule, name = "ScheduleIn", exclude_readonly = True)

station_pydantic = pydantic_model_creator(Station, name = "Station")
station_pydanticIn = pydantic_model_creator(Station, name = "StationIn", exclude_readonly = True)

