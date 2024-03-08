type CarParkInfo = { name: string; description?: string };

export interface CarPark {
  english: CarParkInfo;
  localized: LocalizedData<CarParkInfo>;
}

export const DUMMY_CAR_PARK: CarPark = {
  english: {
    name: 'Kam Fung Building',
  },
  localized: {
    'zh-HK': {
      name: '金豐大廈',
    },
  },
};
