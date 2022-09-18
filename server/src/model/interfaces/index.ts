export interface Ad {
	id: string;
    name: string;
	yearsPlaying: number;
	discord: string;
	weekDays: Array<string>;
	hourStart: string;
	hourEnd: string;
	useVoiceChannel: boolean;
}