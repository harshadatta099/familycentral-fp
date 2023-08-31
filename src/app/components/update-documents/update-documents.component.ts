import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';

 

@Component({
  selector: 'app-update-documents',
  templateUrl: './update-documents.component.html',
  styleUrls: ['./update-documents.component.css']
})
  
export class UpdateDocumentsComponent {

  private dragAndDropUsed: boolean = false;
  public selectedfile: File | null = null;


  formData: any = {
    FamilyId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    UserId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', // You might get this dynamically
    FileName: this.selectedfile?.name || "",
    Thumbnail: false,
    Scan: false
  };

 

  constructor(private fileUploadService: FileUploadService) { }

 

  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }

  onFileSelected(event: any) {
    if (!this.dragAndDropUsed) {
      const selectedFile = event.target.files[0];
      this.handleSelectedFile(selectedFile);
    } else {
      // Clear the file input selection
      event.target.value = '';
    }
  }
  
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.addDragOverStyles();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.removeDragOverStyles();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.removeDragOverStyles();
    this.dragAndDropUsed = true;

    const file = event.dataTransfer?.files[0];
    if (file) {
      this.handleSelectedFile(file);
    }
  }

  handleSelectedFile(file: File): void {
    const selectedFilesContainer = document.getElementById('selectedFilesContainer');

    if (file && selectedFilesContainer) {
      selectedFilesContainer.innerHTML = ''; // Clear previous content

      const fileNameElement = document.createElement('span');
      fileNameElement.textContent = file.name;
      selectedFilesContainer.appendChild(fileNameElement);
    }
    this.selectedfile = file;
  }

  addDragOverStyles(): void {
    const dropArea = document.querySelector('.drop-area');
    if (dropArea) {
      dropArea.classList.add('drag-over');
    }
  }

  removeDragOverStyles(): void {
    const dropArea = document.querySelector('.drop-area');
    if (dropArea) {
      dropArea.classList.remove('drag-over');
    }
  }

  uploadFile(): void {
    if (this.selectedfile) {
      this.fileUploadService.uploadFile(this.selectedfile, this.formData)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            // Handle success here
          },
          error => {
            console.error('File upload failed:', error);
            // Handle error here
          }
        );
    }
  }
}
