import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import api from '../api';


@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit {
  car = { modelo: "", marca: "", ano: 2000, placa: "", chassi: "", renavam: "" }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const id = String(params['id'])

      if (id !== "undefined") {
        let res = await api.get(`/car/${id}`);
        this.car = res.data;
      }
    });
  }

  async save() {
    this.route.params.subscribe(async params => {
      const id = String(params['id'])

      if (id !== "undefined") {
        await api.put(`/car/${id}`, this.car);
        Swal.fire('Sucesso!', 'Sua alteração foi salva', 'success')
      } else {
        await api.post(`/car/`, this.car);
        Swal.fire('Sucesso!', 'Seu carro foi criado', 'success')
      }

      this.router.navigate(['car'])
    });
  }

}
