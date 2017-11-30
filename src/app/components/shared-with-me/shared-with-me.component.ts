import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SkyFile } from '../../models/sky-file';
import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';
import { MatDialog } from '@angular/material';
import { ElectronService } from 'ngx-electron';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-shared-with-me',
    templateUrl: './shared-with-me.component.html',
    styleUrls: ['./shared-with-me.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SharedWithMeComponent implements OnInit {
    myFiles: SkyFile[] = [];
    selectedFiles: SkyFile[] = [];
    currentPath = '';

    constructor(private http: HttpClient,
        private electronService: ElectronService,
        public dialog: MatDialog,
        private ref: ChangeDetectorRef) {
        const file1 = new SkyFile(null, null, '1', false, '11-29-2017', 'file 1', 30);
        const file2 = new SkyFile(null, null, '2', false, '01-02-2015', 'file 2', 1);
        const file3 = new SkyFile(null, null, '1', false, '04-13-2020', 'file 3', 15);
        const dir1 = new SkyFile(null, null, '1', false, '08-08-2008', 'dir 1', 256);
        this.myFiles = [file1, file2, file3, dir1];
    }

    ngOnInit() {
    }

    onPathChanged(newPath) {
        this.currentPath = newPath;
    }

    onFileSelected(newFiles) {
        this.selectedFiles = newFiles;
    }

    downloadFile() {
        this.selectedFiles.forEach(file => {
            this.electronService.remote.dialog.showSaveDialog(savePath => {
                const url = 'http://127.0.0.1:8002/files/' + file.id + '/download';
                const body = {
                    destination: savePath
                };
                this.http.post(url, body).subscribe(response => {
                    console.log(response);
                }, (error) => {
                    console.error(error);
                });
            });
        });
    }

    newFolder() {
        const dialogRef = this.dialog.open(NewFolderDialogComponent, {
            width: '325px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === undefined) {
                return;
            }
            let folderPath = this.currentPath + '/' + result;
            if (folderPath.startsWith('/')) {
                folderPath = folderPath.slice(1);
            }
            const body = {
                destPath: folderPath
            };
            this.http.post('http:/127.0.0.1:8002/files', body).subscribe(response => {
                const file = response['file'];
                if (!file) {
                    console.error('newFolder: no folder returned from request');
                    // this.loadFiles();
                    return;
                }
                this.myFiles.push(file);
            }, (error) => {
                console.error(error);
            });
        });
    }

}
