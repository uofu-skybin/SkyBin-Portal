import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSort, MatTableDataSource} from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http/src/response';

// const PROVIDER_ADDR = "http://165.227.15.136:8003";
const PROVIDER_ADDR = 'http://127.0.0.1:8003';


// The provider API address to access
const PROVIDER_ADDR = "http://localhost:8003";

@Component({
    selector: 'app-provide-storage',
    templateUrl: './provide-storage.component.html',
    styleUrls: ['./provide-storage.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ProvideStorageComponent implements OnInit {
    private myContracts: Contract[] = [];

    // TODO convert to structure as opposed to any object
    providerInfo: InfoResponse = {};
    activityFeed: Activity[] = [];
    displayedColumns = ['Request Type', 'Block ID', 'Renter ID', 'Timestamp', 'Contract'];
    dataSource = new MatTableDataSource<Activity>();

    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    // TODO make dynamic
    wallets = [
        {value: 'wallet-0', viewValue: 'Wallet 1'},
        {value: 'wallet-1', viewValue: 'Wallet 2'},
        {value: 'wallet-2', viewValue: 'Wallet 3'}
    ];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.updateProviderInfo();
        this.loadContracts();
        this.loadActivity();
        // this.updateProviderActivity()
    }

    private loadContracts() {
        this.http.get<ContractsResponse>(`${PROVIDER_ADDR}/contracts`).subscribe(response => {
            console.log(response);
            if (response.contracts) {
                response.contracts.forEach(contract => {
                    this.myContracts.push(contract);
                });
            }
        });
    }

    updateProviderInfo() {
        this.http.get(`${PROVIDER_ADDR}/info`)
            .subscribe((resp: any) => {
                this.providerInfo = resp;
            }, (error: HttpErrorResponse) => {
                console.error(error);
            });
        console.log(this.providerInfo);
    }

    updateProviderSettings() {
        // TODO: set some stuff here
    }

    updateProviderActivity() {
        // this.http.get('http://localhost:8003/activity')
        //     .subscribe((resp: any) => {
        //         this.providerInfo = resp;
        //     }, (error: HttpErrorResponse) => {
        //         console.error(error);
        //     });
        // console.log(this.providerInfo);
    }

    private loadActivity() {
        // requestType?: string;
        // blockId?: string;
        // renterId?: string;
        // time?: Date;
        // contract?: Contract;
        // export interface Contract {
        //     storageSpace: string;
        //     renterID: string;
        // }
        this.activityFeed.push({
            requestType: "NEGOTIATE CONTRACT",
            blockId: "4PNCQEERAP46XZW6OZQQEHZLLCK7NKFF",
            renterId: "4PNCQEERAP46XZW6OZQQEHZLLCK7NKFF",
            time: new Date(),
            contract: {
                storageSpace: "10 GB",
                renterID: "4PNCQEERAP46XZW6OZQQEHZLLCK7NKFF"
            }
        });
        this.dataSource = new MatTableDataSource<Activity>(this.activityFeed);
        // this.http.get<ActivityResponse>(`${PROVIDER_ADDR}/activity`)
        //     .subscribe(response => {
        //         console.log(response.activity);
        //         response.activity.forEach(activity => {
        //             this.activityFeed.push(activity);
        //         });
        //         this.dataSource = new MatTableDataSource<Activity>(this.activityFeed);
        //     });
    }
}

export interface InfoResponse {
    providerAllocated?: number;
    providerReserved?: number;
    providerUsed?: number;
    providerFree?: number;
    providerContracts?: number;
}

export interface Contract {
    storageSpace: string;
    renterID: string;
}

export interface ContractsResponse {
    contracts: Contract[];
}

export interface ActivityResponse {
    activity: Activity[];
}

export interface Activity {
    requestType?: string;
    blockId?: string;
    renterId?: string;
    time?: Date;
    contract?: Contract;
}

// displayedColumns = ['Request Type', 'Block ID', 'Renter ID', 'Time Stamp', 'Contract'];
const DATA: Activity[] = [
    {requestType: 'GET', blockId: '1', renterId: '1', time: new Date(), contract: {storageSpace: '100 KB', renterID: '1'}}
];
