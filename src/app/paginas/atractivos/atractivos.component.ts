import { Component, OnInit } from '@angular/core';

interface Atractivo {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  horarios: string;
  precio: number;
  calificacion: number;
  imagen: string;
}

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.component.html',
  styleUrls: ['./atractivos.component.css']
})
export class AtractivosComponent implements OnInit {
  
  categoriaSeleccionada = 'todos';
  busquedaAtractivos = '';
  
  atractivos: Atractivo[] = [
    {
      id: 1,
      nombre: 'Parroquia de San Miguel Arcángel',
      descripcion: 'Icónica iglesia neogótica del siglo XVII, símbolo arquitectónico de la ciudad y punto de referencia más fotografiado.',
      categoria: 'Patrimonio Religioso',
      ubicacion: 'Centro Histórico - Jardín Principal',
      horarios: '6:00 AM - 8:00 PM',
      precio: 0,
      calificacion: 4.8,
      imagen: 'https://static.wixstatic.com/media/964850_ec8a9a753b6949ea8f3beb9db24567d3~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/parroquia-san-miguel-arcangel-arquidiocesis-de-mexico-1-scaled.jpg'
    },
    {
      id: 2,
      nombre: 'Instituto Allende',
      descripcion: 'Prestigiosa escuela de arte fundada en 1950, con hermosa arquitectura colonial y jardines históricos.',
      categoria: 'Arte y Cultura',
      ubicacion: 'Ancha de San Antonio 20',
      horarios: '9:00 AM - 6:00 PM',
      precio: 50,
      calificacion: 4.5,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMPfXEZBQH0pDteP4zMsVvvVMhuXDyNJivw&s'
    },
    {
      id: 3,
      nombre: 'Casa de Allende',
      descripcion: 'Museo histórico en la casa natal de Ignacio Allende, héroe de la Independencia de México.',
      categoria: 'Histórico',
      ubicacion: 'Cuna de Allende 1',
      horarios: '9:00 AM - 5:00 PM',
      precio: 45,
      calificacion: 4.3,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QdMMH3K10mtNeGXPgTw1IspocGbyEK8jrA&s'
    },
    {
      id: 4,
      nombre: 'Templo de San Francisco',
      descripcion: 'Hermosa iglesia barroca del siglo XVIII con impresionante fachada de cantera rosa.',
      categoria: 'Patrimonio Religioso',
      ubicacion: 'Plaza de San Francisco',
      horarios: '7:00 AM - 7:00 PM',
      precio: 0,
      calificacion: 4.6,
      imagen: 'https://www.mimexico360.com/wp-content/uploads/2019/12/san-francisco03-1-1024x768.jpg'
    },
    {
      id: 5,
      nombre: 'Centro cultural',
      descripcion: 'Centro cultural con exposiciones de arte contemporáneo y eventos culturales en un edificio neoclásico.',
      categoria: 'Arte y Cultura',
      ubicacion: 'Hernández Macías 75',
      horarios: '9:00 AM - 8:00 PM',
      precio: 30,
      calificacion: 4.4,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk9ZMIrAf0_9VeSj6B0zs-YwMVZg7F_Uh-xQ&s'
    },
    {
      id: 6,
      nombre: 'El Charco del Ingenio',
      descripcion: 'Jardín botánico y reserva natural de 67 hectáreas con senderos, flora nativa y vistas espectaculares.',
      categoria: 'Natural',
      ubicacion: 'Barranca del Ingenio',
      horarios: '8:00 AM - 6:00 PM',
      precio: 80,
      calificacion: 4.7,
      imagen: 'https://suma.mx/wp-content/uploads/2018/06/charco.jpg'
    },
    {
      id: 7,
      nombre: 'Santuario de Jesús Nazareno de Atotonilco',
      descripcion: 'Patrimonio Mundial UNESCO, conocido como la "Capilla Sixtina de México" por sus murales únicos.',
      categoria: 'Patrimonio Religioso',
      ubicacion: 'Atotonilco (15 km de San Miguel)',
      horarios: '6:00 AM - 6:00 PM',
      precio: 0,
      calificacion: 4.9,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPNwGQR24r7JZkBJPaOCxNQEoeJqchCTM7w&s'
    },
    {
      id: 8,
      nombre: 'Mirador de San Miguel',
      descripcion: 'Punto panorámico con vistas espectaculares de toda la ciudad y la arquitectura colonial.',
      categoria: 'Natural',
      ubicacion: 'Salida a Celaya',
      horarios: '24 horas',
      precio: 0,
      calificacion: 4.5,
      imagen: 'https://www.atencionsma.com/quepasa/wp-content/uploads/2022/08/el-mirador-san-miguel-de-allende-por-Gerson-Garcia-1024x682.jpg'
    }
  ];

  atractivosFiltrados: Atractivo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.atractivosFiltrados = [...this.atractivos];
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.aplicarFiltros();
  }

  buscarAtractivos() {
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let resultados = [...this.atractivos];

    // Filtrar por categoría
    if (this.categoriaSeleccionada !== 'todos') {
      const categoriaMap: { [key: string]: string } = {
        'religioso': 'Patrimonio Religioso',
        'cultural': 'Arte y Cultura',
        'historico': 'Histórico',
        'natural': 'Natural'
      };
      
      resultados = resultados.filter(atractivo => 
        atractivo.categoria === categoriaMap[this.categoriaSeleccionada]
      );
    }

    // Filtrar por búsqueda de texto
    if (this.busquedaAtractivos.trim()) {
      const busqueda = this.busquedaAtractivos.toLowerCase();
      resultados = resultados.filter(atractivo =>
        atractivo.nombre.toLowerCase().includes(busqueda) ||
        atractivo.descripcion.toLowerCase().includes(busqueda) ||
        atractivo.ubicacion.toLowerCase().includes(busqueda)
      );
    }

    this.atractivosFiltrados = resultados;
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

  verDetalles(atractivo: Atractivo) {
    alert(`Detalles de: ${atractivo.nombre}\n\n${atractivo.descripcion}\n\nUbicación: ${atractivo.ubicacion}\nHorarios: ${atractivo.horarios}\nPrecio: ${atractivo.precio === 0 ? 'Gratuito' : '$' + atractivo.precio + ' MXN'}`);
  }

  verUbicacion(atractivo: Atractivo) {
    alert(`Cómo llegar a: ${atractivo.nombre}\n\nUbicación: ${atractivo.ubicacion}\n\n(Aquí se abriría Google Maps o la aplicación de mapas)`);
  }
}