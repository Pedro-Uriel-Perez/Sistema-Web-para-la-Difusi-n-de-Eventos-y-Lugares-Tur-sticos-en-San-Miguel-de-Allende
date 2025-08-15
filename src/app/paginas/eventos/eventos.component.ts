import { Component, OnInit } from '@angular/core';

interface Evento {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  fechaInicio: string;
  fechaFin: string;
  horario: string;
  precio: number;
  capacidad: string;
  organizador: string;
  imagen: string;
  telefono: string;
  requiereReservacion: boolean;
  esGratuito: boolean;
  esRecurrente: boolean;
}

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  
  categoriaSeleccionada = 'todos';
  busquedaEvento = '';
  
  eventos: Evento[] = [
    {
      id: 1,
      nombre: 'Festival de Música de Cámara',
      descripcion: 'Prestigioso festival internacional de música clásica con artistas de renombre mundial en escenarios históricos.',
      categoria: 'Música',
      ubicacion: 'Teatro Ángela Peralta',
      fechaInicio: '2024-08-20',
      fechaFin: '2024-08-25',
      horario: '8:00 PM - 10:30 PM',
      precio: 650,
      capacidad: '400 personas',
      organizador: 'Festival Internacional SMA',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Zo8GDcUAw31M-o47KE0Vlb7AFJkhG6RS5g&s',
      telefono: '+52 415 152 7040',
      requiereReservacion: true,
      esGratuito: false,
      esRecurrente: true
    },
    {
      id: 2,
      nombre: 'Día de Muertos Tradicional',
      descripcion: 'Celebración auténtica del Día de Muertos con altares, procesiones y tradiciones ancestrales mexicanas.',
      categoria: 'Cultural',
      ubicacion: 'Centro Histórico - Jardín Principal',
      fechaInicio: '2024-11-01',
      fechaFin: '2024-11-02',
      horario: '6:00 PM - 11:00 PM',
      precio: 0,
      capacidad: 'Evento masivo',
      organizador: 'Ayuntamiento de San Miguel de Allende',
      imagen: 'https://cms-b-assets.familysearch.org/dims4/default/bbb722e/2147483647/strip/true/crop/800x500+0+0/resize/800x500!/format/jpg/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F77%2F49%2F9e9c9edae26f4d06d28ed24a57b5%2Fofrenda-at-night.jpg',
      telefono: '+52 415 152 6161',
      requiereReservacion: false,
      esGratuito: true,
      esRecurrente: true
    },
    {
      id: 3,
      nombre: 'Exposición de Arte Contemporáneo',
      descripcion: 'Muestra de arte contemporáneo mexicano e internacional con obras de artistas emergentes y establecidos.',
      categoria: 'Arte',
      ubicacion: 'Centro Cultural El Nigromante',
      fechaInicio: '2024-09-15',
      fechaFin: '2024-10-30',
      horario: '10:00 AM - 6:00 PM',
      precio: 80,
      capacidad: '200 visitantes por día',
      organizador: 'Instituto Allende',
      imagen: 'https://www.gob.mx/cms/uploads/press/main_image/264968/post_WhatsApp_Image_2023-11-09_at_07.00.29.jpeg',
      telefono: '+52 415 152 0289',
      requiereReservacion: false,
      esGratuito: false,
      esRecurrente: false
    },
    {
      id: 4,
      nombre: 'Festival Gastronómico',
      descripcion: 'Celebración culinaria con degustaciones, talleres de cocina y showcooking de chefs reconocidos.',
      categoria: 'Gastronomía',
      ubicacion: 'Múltiples restaurantes del centro',
      fechaInicio: '2024-10-10',
      fechaFin: '2024-10-15',
      horario: '12:00 PM - 10:00 PM',
      precio: 450,
      capacidad: '50 personas por evento',
      organizador: 'Asociación de Restauranteros SMA',
      imagen: 'https://i0.wp.com/thehappening.com/wp-content/uploads/2016/03/sanmiguel3.jpg?fit=1024%2C694&ssl=1',
      telefono: '+52 415 154 8901',
      requiereReservacion: true,
      esGratuito: false,
      esRecurrente: true
    },
    {
      id: 5,
      nombre: 'Las Posadas Navideñas',
      descripcion: 'Tradición navideña mexicana con procesiones, villancicos y representación del nacimiento de Jesús.',
      categoria: 'Religioso',
      ubicacion: 'Parroquia de San Miguel Arcángel',
      fechaInicio: '2024-12-16',
      fechaFin: '2024-12-24',
      horario: '7:00 PM - 9:00 PM',
      precio: 0,
      capacidad: 'Evento masivo',
      organizador: 'Arquidiócesis de León',
      imagen: 'https://static.wixstatic.com/media/66d2af_0786d95b7dce4b5f914092bf9928f7a5~mv2.jpeg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/66d2af_0786d95b7dce4b5f914092bf9928f7a5~mv2.jpeg',
      telefono: '+52 415 152 0245',
      requiereReservacion: false,
      esGratuito: true,
      esRecurrente: true
    },
    {
      id: 6,
      nombre: 'Tour Nocturno de Leyendas',
      descripcion: 'Recorrido nocturno por las calles empedradas descubriendo misterios y leyendas de San Miguel.',
      categoria: 'Turístico',
      ubicacion: 'Punto de encuentro: Jardín Principal',
      fechaInicio: '2024-08-01',
      fechaFin: '2024-12-31',
      horario: '8:00 PM - 10:00 PM',
      precio: 250,
      capacidad: '25 personas por tour',
      organizador: 'San Miguel Legends Tours',
      imagen: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2f/60/09.jpg',
      telefono: '+52 415 159 7834',
      requiereReservacion: true,
      esGratuito: false,
      esRecurrente: true
    },
    {
      id: 7,
      nombre: 'Mercado de Artesanías Sábado',
      descripcion: 'Mercado semanal con artesanos locales, productos tradicionales y presentaciones culturales.',
      categoria: 'Comercial',
      ubicacion: 'Parque Juárez',
      fechaInicio: '2024-08-01',
      fechaFin: '2024-12-31',
      horario: '9:00 AM - 6:00 PM',
      precio: 0,
      capacidad: 'Evento abierto',
      organizador: 'Cooperativa de Artesanos SMA',
      imagen: 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/11/MX_Mercados-en-San-Miguel-de-Allende-que-son-de-visita-obligada-1024x512.png',
      telefono: '+52 415 152 3456',
      requiereReservacion: false,
      esGratuito: true,
      esRecurrente: true
    },
    {
      id: 8,
      nombre: 'Taller de Cerámica Talavera',
      descripcion: 'Taller práctico para aprender la técnica tradicional de cerámica Talavera con maestros artesanos.',
      categoria: 'Educativo',
      ubicacion: 'Taller de Cerámica San Miguel',
      fechaInicio: '2024-09-01',
      fechaFin: '2024-11-30',
      horario: '10:00 AM - 2:00 PM',
      precio: 1200,
      capacidad: '12 personas por taller',
      organizador: 'Escuela de Artes y Oficios',
      imagen: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/84/9f/5a.jpg',
      telefono: '+52 415 152 7788',
      requiereReservacion: true,
      esGratuito: false,
      esRecurrente: true
    }
  ];

  eventosFiltrados: Evento[] = [];

  constructor() { }

  ngOnInit(): void {
    this.eventosFiltrados = [...this.eventos];
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.aplicarFiltros();
  }

  buscarEventos() {
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let resultados = [...this.eventos];

    // Filtrar por categoría
    if (this.categoriaSeleccionada !== 'todos') {
      resultados = resultados.filter(evento => 
        evento.categoria.toLowerCase() === this.categoriaSeleccionada.toLowerCase()
      );
    }

    // Filtrar por búsqueda de texto
    if (this.busquedaEvento.trim()) {
      const busqueda = this.busquedaEvento.toLowerCase();
      resultados = resultados.filter(evento =>
        evento.nombre.toLowerCase().includes(busqueda) ||
        evento.descripcion.toLowerCase().includes(busqueda) ||
        evento.ubicacion.toLowerCase().includes(busqueda) ||
        evento.organizador.toLowerCase().includes(busqueda)
      );
    }

    this.eventosFiltrados = resultados;
  }

  formatearFecha(fecha: string): string {
    const fechaObj = new Date(fecha);
    const opciones: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return fechaObj.toLocaleDateString('es-MX', opciones);
  }

  verDetalles(evento: Evento) {
    const fechaInicio = this.formatearFecha(evento.fechaInicio);
    const fechaFin = this.formatearFecha(evento.fechaFin);
    const fechas = evento.fechaInicio === evento.fechaFin ? fechaInicio : `${fechaInicio} - ${fechaFin}`;
    
    alert(`Detalles de: ${evento.nombre}\n\n${evento.descripcion}\n\nFechas: ${fechas}\nHorario: ${evento.horario}\nUbicación: ${evento.ubicacion}\nOrganizador: ${evento.organizador}\nTeléfono: ${evento.telefono}\n\nCapacidad: ${evento.capacidad}\nPrecio: ${evento.esGratuito ? 'Gratuito' : '$' + evento.precio + ' MXN'}\nReservación requerida: ${evento.requiereReservacion ? 'Sí' : 'No'}`);
  }

  contactarOrganizador(evento: Evento) {
    alert(`Contactar organizador: ${evento.organizador}\n\nTeléfono: ${evento.telefono}\nEvento: ${evento.nombre}\n\n(Se abriría la aplicación de teléfono)`);
  }

  verUbicacion(evento: Evento) {
    alert(`Ubicación de: ${evento.nombre}\n\n${evento.ubicacion}\n\n(Se abriría Google Maps o la aplicación de mapas)`);
  }

  reservar(evento: Evento) {
    if (evento.requiereReservacion) {
      alert(`Reservar para: ${evento.nombre}\n\nContacta al organizador: ${evento.telefono}\n\n(Se redirigiría al sistema de reservas)`);
    } else {
      alert(`${evento.nombre}\n\nNo requiere reservación previa. ¡Solo asiste!`);
    }
  }
}
