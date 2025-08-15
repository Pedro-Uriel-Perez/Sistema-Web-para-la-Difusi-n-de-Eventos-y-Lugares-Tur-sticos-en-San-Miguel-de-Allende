import { Component, OnInit } from '@angular/core';

interface Restaurante {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  horarios: string;
  precioPromedio: number;
  calificacion: number;
  imagen: string;
  telefono: string;
  especialidades: string[];
  tieneTerraza: boolean;
  aceptaTarjeta: boolean;
  tieneEstacionamiento: boolean;
}

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  
  categoriaSeleccionada = 'todos';
  busquedaRestaurante = '';
  
  restaurantes: Restaurante[] = [
    {
      id: 1,
      nombre: 'La Parada',
      descripcion: 'Restaurante de cocina mexicana contemporánea con ambiente elegante y vistas al jardín principal.',
      categoria: 'Mexicana Gourmet',
      ubicacion: 'Relox 10, Centro',
      horarios: '1:00 PM - 11:00 PM',
      precioPromedio: 850,
      calificacion: 4.8,
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/2c/a9/73/la-parada.jpg?w=900&h=500&s=1',
      telefono: '+52 415 152 5595',
      especialidades: ['Mole sanmiguelense', 'Chiles en nogada', 'Cochinita pibil', 'Mezcales artesanales'],
      tieneTerraza: true,
      aceptaTarjeta: true,
      tieneEstacionamiento: false
    },
    {
      id: 2,
      nombre: 'Aperi',
      descripcion: 'Cocina mediterránea con toques mexicanos en un ambiente sofisticado y terraza con vista panorámica.',
      categoria: 'Internacional',
      ubicacion: 'Sollano 11, Centro',
      horarios: '6:00 PM - 12:00 AM',
      precioPromedio: 950,
      calificacion: 4.7,
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/68/c5/03/nuestra-terraza-foto.jpg?w=900&h=500&s=1',
      telefono: '+52 415 154 6765',
      especialidades: ['Risotto de hongos', 'Carpaccio de res', 'Pulpo a la parrilla', 'Vinos europeos'],
      tieneTerraza: true,
      aceptaTarjeta: true,
      tieneEstacionamiento: false
    },
    {
      id: 3,
      nombre: 'The Restaurant',
      descripcion: 'Alta cocina internacional en el Hotel Matilda, experiencia gastronómica de lujo con chef reconocido.',
      categoria: 'Alta Cocina',
      ubicacion: 'Hotel Matilda, Aldama 53',
      horarios: '7:30 AM - 10:30 PM',
      precioPromedio: 1200,
      calificacion: 4.9,
      imagen: 'https://resizer.otstatic.com/v3/photos/79756206-3?width=1280&height=720&webp=true',
      telefono: '+52 415 152 2020',
      especialidades: ['Degustación del chef', 'Foie gras', 'Cordero lechal', 'Maridaje con vinos'],
      tieneTerraza: false,
      aceptaTarjeta: true,
      tieneEstacionamiento: true
    },
    {
      id: 4,
      nombre: 'Café Rama',
      descripcion: 'Acogedora cafetería con desayunos artesanales, café de especialidad y ambiente bohemio.',
      categoria: 'Cafetería',
      ubicacion: 'Cuna de Allende 8',
      horarios: '8:00 AM - 6:00 PM',
      precioPromedio: 250,
      calificacion: 4.5,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3ZjPgNo8Pljkplec-CaPTwoFWrFbaaQybQ&s',
      telefono: '+52 415 152 8947',
      especialidades: ['Café de olla', 'Molletes gourmet', 'Chilaquiles verdes', 'Jugos naturales'],
      tieneTerraza: true,
      aceptaTarjeta: true,
      tieneEstacionamiento: false
    },
    {
      id: 5,
      nombre: 'El Pegaso',
      descripcion: 'Restaurante tradicional con comida casera mexicana, ambiente familiar y precios accesibles.',
      categoria: 'Mexicana Tradicional',
      ubicacion: 'Corregidora 6',
      horarios: '1:00 PM - 9:00 PM',
      precioPromedio: 320,
      calificacion: 4.4,
      imagen: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/ce/7b/7a/la-sirena-gorda.jpg?w=1200&h=900&s=1',
      telefono: '+52 415 152 1351',
      especialidades: ['Pozole rojo', 'Enchiladas mineras', 'Carnitas', 'Agua de jamaica'],
      tieneTerraza: false,
      aceptaTarjeta: false,
      tieneEstacionamiento: false
    },
    {
      id: 6,
      nombre: 'Sollano 18',
      descripcion: 'Cocina de autor en una casa colonial, fusión de sabores mexicanos con técnicas internacionales.',
      categoria: 'Fusión',
      ubicacion: 'Sollano 18',
      horarios: '6:00 PM - 11:00 PM',
      precioPromedio: 780,
      calificacion: 4.6,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRn5EegcDwJKu1H_Wli99qR4IVJx-CIrO4g&s',
      telefono: '+52 415 154 8555',
      especialidades: ['Taco de rib eye', 'Ceviche de mango', 'Pato confitado', 'Cocteles artesanales'],
      tieneTerraza: true,
      aceptaTarjeta: true,
      tieneEstacionamiento: false
    },
    {
      id: 7,
      nombre: 'La Azotea',
      descripcion: 'Rooftop bar y restaurante con vista panorámica, cocina internacional y ambiente relajado.',
      categoria: 'Rooftop',
      ubicacion: 'Umaran 6, Centro',
      horarios: '5:00 PM - 2:00 AM',
      precioPromedio: 650,
      calificacion: 4.3,
      imagen: 'https://i0.wp.com/wordpress.ancana.co/wp-content/uploads/2023/03/sma-39793302-rsma-luna-bar-v5-cj-1-1024x683.webp?resize=1024%2C683&ssl=1',
      telefono: '+52 415 154 7890',
      especialidades: ['Pizzas artesanales', 'Hamburguesas gourmet', 'Cocteles sunset', 'Tabla de quesos'],
      tieneTerraza: true,
      aceptaTarjeta: true,
      tieneEstacionamiento: false
    },
    {
      id: 8,
      nombre: 'Mercado de Comida',
      descripcion: 'Mercado gastronómico con múltiples opciones de comida local, antojitos y ambiente auténtico.',
      categoria: 'Comida Callejera',
      ubicacion: 'Mercado Ignacio Ramírez',
      horarios: '9:00 AM - 4:00 PM',
      precioPromedio: 120,
      calificacion: 4.2,
      imagen: 'https://cdn.prod.website-files.com/64bd660b7b08937b065f6ea3/64e8dd6f726f5c4b577da271_649a09b33f40e7c7b7ceaf39_Best%2520Restaurants%2520San%2520Miguel%2520de%2520Allende%2520-%2520Thumb.jpeg',
      telefono: 'Sin teléfono fijo',
      especialidades: ['Tacos al pastor', 'Quesadillas', 'Tamales', 'Aguas frescas'],
      tieneTerraza: false,
      aceptaTarjeta: false,
      tieneEstacionamiento: false
    }
  ];

  restaurantesFiltrados: Restaurante[] = [];

  constructor() { }

  ngOnInit(): void {
    this.restaurantesFiltrados = [...this.restaurantes];
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.aplicarFiltros();
  }

  buscarRestaurantes() {
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let resultados = [...this.restaurantes];

    // Filtrar por categoría
    if (this.categoriaSeleccionada !== 'todos') {
      const categoriaMap: { [key: string]: string } = {
        'mexicana': 'Mexicana Gourmet',
        'tradicional': 'Mexicana Tradicional',
        'internacional': 'Internacional',
        'alta-cocina': 'Alta Cocina',
        'cafeteria': 'Cafetería',
        'fusion': 'Fusión',
        'rooftop': 'Rooftop',
        'callejera': 'Comida Callejera'
      };
      
      resultados = resultados.filter(restaurante => 
        restaurante.categoria === categoriaMap[this.categoriaSeleccionada]
      );
    }

    // Filtrar por búsqueda de texto
    if (this.busquedaRestaurante.trim()) {
      const busqueda = this.busquedaRestaurante.toLowerCase();
      resultados = resultados.filter(restaurante =>
        restaurante.nombre.toLowerCase().includes(busqueda) ||
        restaurante.descripcion.toLowerCase().includes(busqueda) ||
        restaurante.ubicacion.toLowerCase().includes(busqueda) ||
        restaurante.especialidades.some(especialidad => 
          especialidad.toLowerCase().includes(busqueda)
        )
      );
    }

    this.restaurantesFiltrados = resultados;
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

  verDetalles(restaurante: Restaurante) {
    const especialidades = restaurante.especialidades.join(', ');
    alert(`Detalles de: ${restaurante.nombre}\n\n${restaurante.descripcion}\n\nUbicación: ${restaurante.ubicacion}\nTeléfono: ${restaurante.telefono}\nHorarios: ${restaurante.horarios}\n\nEspecialidades: ${especialidades}\n\nPrecio promedio: $${restaurante.precioPromedio} MXN\nTerraza: ${restaurante.tieneTerraza ? 'Sí' : 'No'}\nAcepta tarjeta: ${restaurante.aceptaTarjeta ? 'Sí' : 'No'}`);
  }

  llamarRestaurante(restaurante: Restaurante) {
    if (restaurante.telefono === 'Sin teléfono fijo') {
      alert(`${restaurante.nombre} no tiene teléfono fijo disponible.`);
    } else {
      alert(`Llamar a: ${restaurante.nombre}\n\nTeléfono: ${restaurante.telefono}\n\n(Se abriría la aplicación de teléfono)`);
    }
  }

  verUbicacion(restaurante: Restaurante) {
    alert(`Cómo llegar a: ${restaurante.nombre}\n\nUbicación: ${restaurante.ubicacion}\n\n(Aquí se abriría Google Maps o la aplicación de mapas)`);
  }
}