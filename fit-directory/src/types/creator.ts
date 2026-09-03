export interface Creator {
  id: string;
  handle: string;
  name: string;
  platform: 'Instagram' | 'TikTok';
  followers?: string;
  city?: string;
  state?: string;
  specialties: string[];
  program_name?: string;
  link?: string;
}