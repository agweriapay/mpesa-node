import axios from 'axios';

import { endpoints } from './endpoints';
import { AppEnvironment } from './types';

const http = (environment: AppEnvironment) =>
    axios.create({
        baseURL: environment === 'production' ? endpoints.production : endpoints.sandbox,
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    });
export default http;
