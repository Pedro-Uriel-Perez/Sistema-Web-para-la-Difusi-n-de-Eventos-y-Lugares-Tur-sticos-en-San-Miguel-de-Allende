import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  busqueda = '';
  
  atractivosDestacados = [
    {
      nombre: 'Parroquia de San Miguel Arcángel',
      descripcion: 'Icónica iglesia neogótica del siglo XVII, símbolo de la ciudad.',
      imagen: 'https://static.wixstatic.com/media/964850_ec8a9a753b6949ea8f3beb9db24567d3~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/parroquia-san-miguel-arcangel-arquidiocesis-de-mexico-1-scaled.jpg',
      calificacion: 4.8
    },
    {
      nombre: 'Instituto Allende',
      descripcion: 'Escuela de arte y cultura con arquitectura colonial.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMPfXEZBQH0pDteP4zMsVvvVMhuXDyNJivw&s',
      calificacion: 4.5
    },
    {
      nombre: 'Jardín Principal',
      descripcion: 'Corazón de la ciudad con música, arte y vida nocturna.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkbL1Hw8RiAEuV0H7FWt2NuepLAhMzCv60A&s',
      calificacion: 4.7
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscar() {
    if (this.busqueda.trim()) {
      console.log('Buscando:', this.busqueda);
      // Aquí puedes implementar la lógica de búsqueda
      alert('Función de búsqueda: ' + this.busqueda);
    }
  }
}
