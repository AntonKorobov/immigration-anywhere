export interface settingInterface {
  mapType: MapType;
  language: LanguageType;
}

export enum MapType {
  globe = 'globe',
  flat = 'mercator',
}

export enum LanguageType {
  by = 'belarusian',
  ru = 'russian',
}
