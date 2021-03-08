import { Component, OnInit } from '@angular/core';
import api from '../api';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars = [];

  constructor() { }

  async getCars() {
    this.cars = [];
    let res = await api.get('/car');

    for (var key in res.data) {
      this.cars.push(res.data[key])
    }
  }

  async ngOnInit() {
    await this.getCars();
  }

  async delete(id) {
    await api.delete(`/car/${id}`);
    await this.getCars();
    Swal.fire('Sucesso', 'O carro foi deletado', 'success')
  }

}
