export interface IContent {
  _id?: string;
  title?: string;
  description?: string;
  img?: string;
  imgTitle?: string;
  imgThumb?: string;
  imgVertical?: string;
  trailer?: string;
  movie?: string;
  duration?: string;
  year?: string;
  limit?: string;
  genre?: string;
  isSeries?: boolean;
}

export interface ModalState {
  isOpen: boolean;
  contentId?: string;
}

export interface SearchBoxState {
  isOpen: boolean;
  query?: string;
}
