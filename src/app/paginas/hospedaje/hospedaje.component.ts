import { Component, OnInit } from '@angular/core';

interface Hospedaje {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  servicios: string[];
  precio: number;
  calificacion: number;
  imagen: string;
  telefono: string;
  wifi: boolean;
  estacionamiento: boolean;
  desayuno: boolean;
}

@Component({
  selector: 'app-hospedaje',
  templateUrl: './hospedaje.component.html',
  styleUrls: ['./hospedaje.component.css']
})
export class HospedajeComponent implements OnInit {
  
  categoriaSeleccionada = 'todos';
  busquedaHospedaje = '';
  
  hospedajes: Hospedaje[] = [
    {
      id: 1,
      nombre: 'Hotel Casa de Sierra Nevada',
      descripcion: 'Lujoso hotel boutique en mansiones coloniales del siglo XVI, con spa de clase mundial y jardines exquisitos.',
      categoria: 'Lujo',
      ubicacion: 'Centro Histórico - Hospicio 35',
      servicios: ['Spa', 'Restaurante gourmet', 'Concierge', 'Tours privados'],
      precio: 8500,
      calificacion: 4.9,
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/36/18/dd/aerial-view.jpg?w=900&h=500&s=1',
      telefono: '+52 415 152 7040',
      wifi: true,
      estacionamiento: true,
      desayuno: true
    },
    {
      id: 2,
      nombre: 'Rosewood San Miguel de Allende',
      descripcion: 'Resort de ultra lujo con arquitectura colonial, spa holístico y vistas panorámicas de la ciudad.',
      categoria: 'Lujo',
      ubicacion: 'Nemesio Diez 11',
      servicios: ['Spa', 'Múltiples restaurantes', 'Piscina', 'Centro fitness'],
      precio: 12000,
      calificacion: 4.8,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_7jQ7snVZ9tYgsQ5Z-1qNga54kfxsoD2Kw&s',
      telefono: '+52 415 529 1000',
      wifi: true,
      estacionamiento: true,
      desayuno: true
    },
    {
      id: 3,
      nombre: 'Hotel Matilda',
      descripcion: 'Elegante hotel boutique contemporáneo con arte mexicano, diseño moderno y atmósfera sofisticada.',
      categoria: 'Boutique',
      ubicacion: 'Aldama 53, Centro',
      servicios: ['Restaurante', 'Bar', 'Galería de arte', 'Terraza'],
      precio: 4200,
      calificacion: 4.6,
      imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/2d/9e/dc/d3/lobby.jpg',
      telefono: '+52 415 152 2020',
      wifi: true,
      estacionamiento: true,
      desayuno: false
    },
    {
      id: 4,
      nombre: 'Casa Rosada Hotel',
      descripcion: 'Encantador hotel con arquitectura tradicional mexicana, patios floridos y ambiente familiar.',
      categoria: 'Tradicional',
      ubicacion: 'Codo 10, Centro',
      servicios: ['Restaurante', 'Jardín', 'Terraza', 'Servicio de tours'],
      precio: 2800,
      calificacion: 4.4,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdn-igPLX9PepiNZwxXL5lbHIrIZgHsCg5hA&s',
      telefono: '+52 415 152 0804',
      wifi: true,
      estacionamiento: false,
      desayuno: true
    },
    {
      id: 5,
      nombre: 'Hotel Posada Carmina',
      descripcion: 'Acogedor hotel familiar con decoración colonial auténtica y ubicación privilegiada en el centro.',
      categoria: 'Económico',
      ubicacion: 'Cuna de Allende 7',
      servicios: ['Restaurante', 'Terraza', 'Recepción 24h'],
      precio: 1500,
      calificacion: 4.2,
      imagen: 'https://www.kayak.com.mx/rimg/himg/06/af/06/expediav2-632924-07267b-387279.jpg?width=1366&height=768&crop=true',
      telefono: '+52 415 152 0458',
      wifi: true,
      estacionamiento: false,
      desayuno: true
    },
    {
      id: 6,
      nombre: 'Casa Schuck Boutique Hotel',
      descripcion: 'Íntimo hotel boutique con solo 8 suites, decoración exquisita y servicio personalizado.',
      categoria: 'Boutique',
      ubicacion: 'Garita 3',
      servicios: ['Concierge', 'Terraza', 'Biblioteca', 'Sala de estar'],
      precio: 3500,
      calificacion: 4.7,
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/24/14/13/whole-hacienda-photo.jpg?w=900&h=500&s=1',
      telefono: '+52 415 152 0077',
      wifi: true,
      estacionamiento: false,
      desayuno: true
    },
    {
      id: 7,
      nombre: 'Hotel Quinta Loreto',
      descripcion: 'Hotel de carácter con hermosos jardines, piscina y ambiente tranquilo, ideal para relajarse.',
      categoria: 'Tradicional',
      ubicacion: 'Loreto 15',
      servicios: ['Piscina', 'Jardín', 'Restaurante', 'Spa'],
      precio: 2200,
      calificacion: 4.3,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArhDBLEtDS_zOk_vtOblzxc_SPc996gmDEA&s',
      telefono: '+52 415 152 0042',
      wifi: true,
      estacionamiento: true,
      desayuno: true
    },
    {
      id: 8,
      nombre: 'Hostal Punto 79',
      descripcion: 'Hostal moderno para viajeros jóvenes con dormitorios cómodos y áreas comunes vibrantes.',
      categoria: 'Hostal',
      ubicacion: 'Mesones 79',
      servicios: ['Cocina compartida', 'Área común', 'Lavandería', 'Tours grupales'],
      precio: 450,
      calificacion: 4.1,
      imagen: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/555421266.jpg?k=810ef59020d55e69df5b0ffa97f7875fa6e10761f7bb206f7ab58680d385390a&o=&hp=1',
      telefono: '+52 415 152 9876',
      wifi: true,
      estacionamiento: false,
      desayuno: false
    }
  ];

  hospedajesFiltrados: Hospedaje[] = [];

  constructor() { }

  ngOnInit(): void {
    this.hospedajesFiltrados = [...this.hospedajes];
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.aplicarFiltros();
  }

  buscarHospedajes() {
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let resultados = [...this.hospedajes];

    // Filtrar por categoría
    if (this.categoriaSeleccionada !== 'todos') {
      resultados = resultados.filter(hospedaje => 
        hospedaje.categoria.toLowerCase() === this.categoriaSeleccionada.toLowerCase()
      );
    }

    // Filtrar por búsqueda de texto
    if (this.busquedaHospedaje.trim()) {
      const busqueda = this.busquedaHospedaje.toLowerCase();
      resultados = resultados.filter(hospedaje =>
        hospedaje.nombre.toLowerCase().includes(busqueda) ||
        hospedaje.descripcion.toLowerCase().includes(busqueda) ||
        hospedaje.ubicacion.toLowerCase().includes(busqueda) ||
        hospedaje.servicios.some(servicio => 
          servicio.toLowerCase().includes(busqueda)
        )
      );
    }

    this.hospedajesFiltrados = resultados;
  }

  obtenerEstrellas(calificacion: number): string[] {
    const estrellas = [];
    const entero = Math.floor(calificacion);
    const decimal = calificacion - entero;

    // Estrellas completas
    for (let i = 0; i < entero; i++) {
      estrellas.push('★');
    }

    // Media estrella si hay decimal >= 0.5
    if (decimal >= 0.5) {
      estrellas.push('⭐');
    }

    // Estrellas vacías hasta completar 5
    while (estrellas.length < 5) {
      estrellas.push('☆');
    }

    return estrellas;
  }

  verDetalles(hospedaje: Hospedaje) {
    const servicios = hospedaje.servicios.join(', ');
    alert(`Detalles de: ${hospedaje.nombre}\n\n${hospedaje.descripcion}\n\nUbicación: ${hospedaje.ubicacion}\nTeléfono: ${hospedaje.telefono}\nServicios: ${servicios}\n\nPrecio por noche: $${hospedaje.precio} MXN\nWiFi: ${hospedaje.wifi ? 'Sí' : 'No'}\nEstacionamiento: ${hospedaje.estacionamiento ? 'Sí' : 'No'}\nDesayuno incluido: ${hospedaje.desayuno ? 'Sí' : 'No'}`);
  }

  llamarHotel(hospedaje: Hospedaje) {
    alert(`Llamar a: ${hospedaje.nombre}\n\nTeléfono: ${hospedaje.telefono}\n\n(Se abriría la aplicación de teléfono)`);
  }

  reservar(hospedaje: Hospedaje) {
    alert(`Reservar en: ${hospedaje.nombre}\n\n(Se redirigiría al sistema de reservas)`);
  }
}

