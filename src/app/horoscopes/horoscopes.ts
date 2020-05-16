
export interface IHoroscopes {
  id: number;
  horoscopeSign: string;
  horoscopeDate: string;
  element: string;
  elementIcon: string;
  celebrity: string;
  planet: string;
  attractedTo: string;
  unattractedTo: string;
  keywords: {
    first: string;
    second: string;
    third: string;
  };
  description: string;
  imageUrl: string;
  profileImage: string;
  symbol: string;
  icon: string;
}
