import { AxiosInstance } from 'axios';

import http from './http';
import { AppEnvironment, CredentialsInterface } from './types';

export class MPesaApi {
    private environment: AppEnvironment;
    private clientKey: string;
    private clientSecret: string;
    private securityCredential: string;
    private http: AxiosInstance;

    constructor(
        { clientKey, clientSecret, securityCredential, initiatorPassword, certificatePath }: CredentialsInterface,
        environment: AppEnvironment,
    ) {
        this.clientKey = clientKey;
        this.clientSecret = clientSecret;

        this.environment = environment;

        this.http = http(environment);

        console.log('Application Setup');
    }
}
