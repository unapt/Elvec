# Vanadium Hackathon Template

This is straight boiler-plate using:

Frontend: NextJS, Typescript, Chakra UI

Backend: FastAPI, Python

Install dependencies (run this on the parent directory)

```bash
npm install
```

Then you can run the frontend with:

```bash
cd packages/frontend
npm run dev
```

Then you can run the backend on a different terminal instance:

```bash
cd packages/backend
npm run dev
```

Troubleshooting Errors:

If you are having initial erroring in front-end code, make sure you are using the workspace version of typescript. 
You can check this through command pallete ```CRLT``` + ```SHIFT``` + ```P``` then typing ```Typescript: Select Typescript Version```

If you are having issues reciving server responces from the backend please ensure you are using node version < 18. 

*template was build on v16.16.0


#### Note: If you see something that can be improved, please make a PR
