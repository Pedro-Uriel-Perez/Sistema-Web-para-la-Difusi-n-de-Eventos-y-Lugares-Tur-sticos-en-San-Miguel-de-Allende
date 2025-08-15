import { Component, OnInit } from '@angular/core';

interface Ruta {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  duracion: string;
  distancia: string;
  dificultad: string;
  puntoInicio: string;
  puntoFinal: string;
  paradas: string[];
  precio: number;
  incluye: string[];
  imagen: string;
  telefono: string;
  operador: string;
  horarios: string;
  disponible: boolean;
  requiereReservacion: boolean;
}

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  
  tipoSeleccionado = 'todos';
  busquedaRuta = '';
  
  rutas: Ruta[] = [
    {
      id: 1,
      nombre: 'Tour Centro Histórico Colonial',
      descripcion: 'Recorrido a pie por los principales sitios históricos y arquitectónicos del centro de San Miguel de Allende.',
      tipo: 'A pie',
      duracion: '2.5 horas',
      distancia: '3.2 km',
      dificultad: 'Fácil',
      puntoInicio: 'Jardín Principal',
      puntoFinal: 'Mirador',
      paradas: ['Parroquia San Miguel Arcángel', 'Instituto Allende', 'Casa de Allende', 'Templo San Francisco', 'Plaza Cívica'],
      precio: 350,
      incluye: ['Guía certificado', 'Mapa turístico', 'Degustación de dulces típicos'],
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIk75OZj_ScxgXBSNIE66lUw0voMIiFjbLrXliy_tTvOvPpEjxgBEglT2uPZtwT7p6iA&usqp=CAU',
      telefono: '+52 415 152 7890',
      operador: 'San Miguel Walking Tours',
      horarios: '10:00 AM, 2:00 PM, 5:00 PM',
      disponible: true,
      requiereReservacion: true
    },
    {
      id: 2,
      nombre: 'Ruta en Bicicleta por Viñedos',
      descripcion: 'Aventura ciclística visitando viñedos locales con degustaciones de vino y paisajes espectaculares.',
      tipo: 'Ciclismo',
      duracion: '4 horas',
      distancia: '25 km',
      dificultad: 'Moderada',
      puntoInicio: 'Centro de San Miguel',
      puntoFinal: 'Viñedo Tres Raíces',
      paradas: ['Viñedo San Lucas', 'Rancho Los Senderos', 'Viñedo Tres Raíces', 'Mirador Valle'],
      precio: 850,
      incluye: ['Bicicleta y casco', 'Guía especializado', 'Degustación de vinos', 'Lunch campestre'],
      imagen: 'https://www.mexicodesconocido.com.mx/sites/default/files/styles/adaptive/public/fichas-destino/ride-bike-wine-ensenada-depositphotos-1200.jpg',
      telefono: '+52 415 154 3456',
      operador: 'Bike & Wine Tours SMA',
      horarios: '9:00 AM, 2:00 PM',
      disponible: true,
      requiereReservacion: true
    },
    {
      id: 3,
      nombre: 'Tour Gastronómico de Mercados',
      descripcion: 'Experiencia culinaria visitando mercados locales, cocinas tradicionales y street food auténtico.',
      tipo: 'Gastronómico',
      duracion: '3.5 horas',
      distancia: '2.8 km',
      dificultad: 'Fácil',
      puntoInicio: 'Mercado Ignacio Ramírez',
      puntoFinal: 'Mercado de Artesanías',
      paradas: ['Mercado Ignacio Ramírez', 'Cocina tradicional', 'Taller de tortillas', 'Mercado de Artesanías'],
      precio: 650,
      incluye: ['Degustaciones múltiples', 'Clase de cocina', 'Recetas tradicionales', 'Ingredientes para llevar'],
      imagen: 'https://images.theconversation.com/files/583691/original/file-20240322-20-6yfz5a.jpg?ixlib=rb-4.1.0&rect=44%2C22%2C3624%2C2429&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
      telefono: '+52 415 159 8765',
      operador: 'Sabores de San Miguel',
      horarios: '11:00 AM, 4:00 PM',
      disponible: true,
      requiereReservacion: true
    },
    {
      id: 4,
      nombre: 'Aventura Off-Road 4x4',
      descripcion: 'Expedición en vehículos todo terreno por senderos naturales, cañones y paisajes rurales únicos.',
      tipo: 'Aventura',
      duracion: '5 horas',
      distancia: '45 km',
      dificultad: 'Moderada',
      puntoInicio: 'Base de Operaciones SMA',
      puntoFinal: 'Cañón de la Beata',
      paradas: ['Presa Allende', 'Pueblo fantasma mineral', 'Cañón de la Beata', 'Aguas termales'],
      precio: 1200,
      incluye: ['Vehículo 4x4', 'Conductor-guía', 'Equipo de seguridad', 'Refrigerio'],
      imagen: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/78/5d/fe.jpg',
      telefono: '+52 415 157 4321',
      operador: 'Aventuras Guanajuato',
      horarios: '9:00 AM, 1:00 PM',
      disponible: true,
      requiereReservacion: true
    },
    {
      id: 5,
      nombre: 'Ruta Artística y Galerías',
      descripcion: 'Recorrido cultural visitando talleres de artistas, galerías de arte y espacios creativos de la ciudad.',
      tipo: 'Cultural',
      duracion: '3 horas',
      distancia: '4.5 km',
      puntoInicio: 'Instituto Allende',
      puntoFinal: 'Centro Cultural El Nigromante',
      paradas: ['Instituto Allende', 'Galería Atotonilco', 'Taller de cerámica', 'Fábrica La Aurora', 'Centro Cultural'],
      precio: 450,
      incluye: ['Guía especializado en arte', 'Entrada a galerías', 'Demostración artística', 'Catálogo de arte'],
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhSm5cFcxOftSsgWKv3epUkyCRZRPqR9C3h92DSyAQ1wSTVbe9CyQpf2xLjgkSp2fR_o&usqp=CAU',
      telefono: '+52 415 152 9876',
      operador: 'Arte y Cultura SMA',
      horarios: '10:00 AM, 3:00 PM',
      disponible: true,
      requiereReservacion: false,
      dificultad: ''
    },
    {
      id: 6,
      nombre: 'Senderismo Charco del Ingenio',
      descripcion: 'Caminata ecológica por el jardín botánico más importante de la región con flora nativa excepcional.',
      tipo: 'Ecoturismo',
      duracion: '2 horas',
      distancia: '5.5 km',
      dificultad: 'Moderada',
      puntoInicio: 'Entrada Charco del Ingenio',
      puntoFinal: 'Mirador del Cañón',
      paradas: ['Jardín de cactáceas', 'Sendero del río', 'Capilla ecológica', 'Mirador del Cañón'],
      precio: 180,
      incluye: ['Entrada al jardín botánico', 'Guía naturalista', 'Binoculares', 'Agua purificada'],
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqU8YijNAF2axg3A1EdTrnFsPbfbD0ssWqw&s',
      telefono: '+52 415 154 7777',
      operador: 'Charco del Ingenio A.C.',
      horarios: '8:00 AM, 10:00 AM, 2:00 PM, 4:00 PM',
      disponible: true,
      requiereReservacion: false
    },
    {
      id: 7,
      nombre: 'Tour Nocturno de Leyendas',
      descripcion: 'Misterioso recorrido nocturno conociendo las leyendas, mitos y historias sobrenaturales de la ciudad.',
      tipo: 'Temático',
      duracion: '1.5 horas',
      distancia: '2.2 km',
      dificultad: 'Fácil',
      puntoInicio: 'Jardín Principal',
      puntoFinal: 'Panteón de la Santa Cruz',
      paradas: ['Casa de la Inquisición', 'Callejón del Beso', 'Casa embrujada', 'Panteón histórico'],
      precio: 280,
      incluye: ['Guía teatralizado', 'Linterna vintage', 'Mapa de leyendas', 'Sorpresa final'],
      imagen: 'https://www.detourporguanajuato.com/wp-content/uploads/2023/05/leyendas3.jpg',
      telefono: '+52 415 159 3333',
      operador: 'Leyendas de San Miguel',
      horarios: '8:00 PM, 9:30 PM',
      disponible: true,
      requiereReservacion: true
    },
    {
      id: 8,
      nombre: 'Ruta a Pueblos Mágicos Cercanos',
      descripcion: 'Excursión de día completo visitando pueblos mágicos cercanos como Dolores Hidalgo y Mineral de Pozos.',
      tipo: 'Excursión',
      duracion: '8 horas',
      distancia: '180 km',
      dificultad: 'Fácil',
      puntoInicio: 'Plaza Principal SMA',
      puntoFinal: 'Plaza Principal SMA',
      paradas: ['Dolores Hidalgo', 'Casa de Hidalgo', 'Taller de cerámica', 'Mineral de Pozos', 'Pueblo fantasma'],
      precio: 950,
      incluye: ['Transporte cómodo', 'Guía certificado', 'Almuerzo típico', 'Entradas a museos'],
      imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniversal/IGCPJMUWUNAOVMLSRY4ISDAZIQ.jpg',
      telefono: '+52 415 152 5555',
      operador: 'Rutas Mágicas México',
      horarios: '8:00 AM',
      disponible: true,
      requiereReservacion: true
    }
  ];

  rutasFiltradas: Ruta[] = [];

  constructor() { }

  ngOnInit(): void {
    this.rutasFiltradas = [...this.rutas];
  }

  filtrarPorTipo(tipo: string) {
    this.tipoSeleccionado = tipo;
    this.aplicarFiltros();
  }

  buscarRutas() {
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let resultados = [...this.rutas];

    // Filtrar por tipo
    if (this.tipoSeleccionado !== 'todos') {
      resultados = resultados.filter(ruta => 
        ruta.tipo.toLowerCase() === this.tipoSeleccionado.toLowerCase()
      );
    }

    // Filtrar por búsqueda de texto
    if (this.busquedaRuta.trim()) {
      const busqueda = this.busquedaRuta.toLowerCase();
      resultados = resultados.filter(ruta =>
        ruta.nombre.toLowerCase().includes(busqueda) ||
        ruta.descripcion.toLowerCase().includes(busqueda) ||
        ruta.puntoInicio.toLowerCase().includes(busqueda) ||
        ruta.puntoFinal.toLowerCase().includes(busqueda) ||
        ruta.paradas.some(parada => 
          parada.toLowerCase().includes(busqueda)
        ) ||
        ruta.operador.toLowerCase().includes(busqueda)
      );
    }

    this.rutasFiltradas = resultados;
  }

  obtenerColorDificultad(dificultad: string): string {
    switch(dificultad.toLowerCase()) {
      case 'fácil': return '#28a745';
      case 'moderada': return '#ffc107';
      case 'difícil': return '#dc3545';
      default: return '#6c757d';
    }
  }

  verDetalles(ruta: Ruta) {
    const paradas = ruta.paradas.join(' → ');
    const incluye = ruta.incluye.join(', ');
    
    alert(`Detalles de: ${ruta.nombre}\n\n${ruta.descripcion}\n\nDuración: ${ruta.duracion}\nDistancia: ${ruta.distancia}\nDificultad: ${ruta.dificultad}\n\nRuta: ${ruta.puntoInicio} → ${ruta.puntoFinal}\nParadas: ${paradas}\n\nOperador: ${ruta.operador}\nTeléfono: ${ruta.telefono}\nHorarios: ${ruta.horarios}\n\nIncluye: ${incluye}\n\nPrecio: $${ruta.precio} MXN\nReservación: ${ruta.requiereReservacion ? 'Requerida' : 'No requerida'}`);
  }

  contactarOperador(ruta: Ruta) {
    alert(`Contactar operador: ${ruta.operador}\n\nTeléfono: ${ruta.telefono}\nRuta: ${ruta.nombre}\n\n(Se abriría la aplicación de teléfono)`);
  }

  reservar(ruta: Ruta) {
    if (ruta.requiereReservacion) {
      alert(`Reservar: ${ruta.nombre}\n\nContacta al operador: ${ruta.operador}\nTeléfono: ${ruta.telefono}\nHorarios: ${ruta.horarios}\n\n(Se redirigiría al sistema de reservas)`);
    } else {
      alert(`${ruta.nombre}\n\nNo requiere reservación previa.\nHorarios disponibles: ${ruta.horarios}\n¡Solo presenta este mensaje!`);
    }
  }

  compartirRuta(ruta: Ruta) {
    const texto = `🚶‍♂️ ${ruta.nombre}\n📍 ${ruta.puntoInicio} → ${ruta.puntoFinal}\n⏱️ ${ruta.duracion}\n💰 $${ruta.precio} MXN\n\n¡Descubre San Miguel de Allende!`;
    
    if (navigator.share) {
      navigator.share({
        title: ruta.nombre,
        text: texto,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(texto).then(() => {
        alert('Información de la ruta copiada al portapapeles');
      }).catch(() => {
        alert(`Comparte esta ruta:\n\n${texto}`);
      });
    }
  }
}