import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getLoggedIn() {
    if (localStorage.length) {
      return true;
    } else {
      return false;
    }
  }

  private data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];


  getAllData() {
    return this.data;
  }

  getDataById(id: number) {
    return this.data.find(item => item.id === id);
  }

  createData(newData: any) {
    newData.id = this.data.length + 1;
    this.data.push(newData);
  }

  updateData(updatedData: any) {
    let index = this.data.findIndex(item => item.id === updatedData.id);
    if (index !== -1) {
      this.data[index] = updatedData;
    }
  }

  deleteData(id: number) {
    this.data = this.data.filter(item => item.id !== id);
  }
}
