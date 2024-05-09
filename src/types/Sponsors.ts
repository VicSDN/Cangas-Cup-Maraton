type SponsorId =
  | "Ayuntamiento"
  | "baccara"
  | "asturtoner"
  | "puntoycoma"
  | "laabadia"
  | "refierta"
  | "cajarural"
  | "lozano"
  | "javita"
  | "manin"
  | "nuevo1" // Nuevo patrocinador 1
  | "nuevo2" // Nuevo patrocinador 2
  | "nuevo3" // Nuevo patrocinador 3
  | "nuevo4" // Nuevo patrocinador 4
  | "nuevo5" // Nuevo patrocinador 5
  | "nuevo6"; // Nuevo patrocinador 6

type SponsorName =
  | "Ayuntamiento Cangas del Narcea"
  | "Baccara"
  | "Asturtoner"
  | "Punto y Coma"
  | "La Abadía"
  | "Refierta"
  | "Caja Rural"
  | "Transportes Lozano"
  | "Javita"
  | "Manin"
  | "Nuevo Patrocinador 1" // Nombre del nuevo patrocinador 1
  | "Nuevo Patrocinador 2" // Nombre del nuevo patrocinador 2
  | "Nuevo Patrocinador 3" // Nombre del nuevo patrocinador 3
  | "Nuevo Patrocinador 4" // Nombre del nuevo patrocinador 4
  | "Nuevo Patrocinador 5" // Nombre del nuevo patrocinador 5
  | "Nuevo Patrocinador 6"; // Nombre del nuevo patrocinador 6

export interface Sponsors {
  id: SponsorId;
  name: SponsorName;
  url: string;
  image: {
    width: number;
    height: number;
  };
}

