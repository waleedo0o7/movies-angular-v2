export interface MovieList {
  page?: number;
  results: any[];
  total_pages? : number;
  total_results : number;
  genreNames?: [];
}

export interface MovieDetails {
  id: number;
  adult :Boolean;
  poster_path?: string;
  title?: string;
  original_name? : string;
  vote_average?:number;
  release_date: string;
  overview: string;
  genres: any[];
  runtime : any;
}
