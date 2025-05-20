export interface FrequencyDetails {
    ranking: number;
    winRate?: string | number;
    minGap?: number;
    maxGap?: number;
    averageGap?: number;
    white_weeklyHits?: string;
    yellow_weeklyHits?: string;
    white_lastSeenDate?: string;
    yellow_lastSeenDate?: string;
    white_confidence?: number;
    yellow_confidence?: number;
    [key: string]: any;
  }

  

  interface WhiteStatics {
    number: number;
    type: string;
    totalDraws: number;
    frequency: number;
    frequencyCombine?: number;
    averageGap: number;
    daysSinceLastSeen: number;
    recentHits: number;
  }
  