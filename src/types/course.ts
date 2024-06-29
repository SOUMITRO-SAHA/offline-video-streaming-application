export interface Course {
  id: string;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
  archive: boolean;
  favorite: boolean;
  startDate: string;
  endDate: string;
  section: {
    id: string;
    title: string;
    isActive?: boolean;
    isCompleted?: boolean;
  }[];
}
