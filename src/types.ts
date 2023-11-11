export type LotteryEntry = {
  userName: string;
  // Ticket and ball numbers (which are the same)
  entryNumber: number;
  // -1 is for non winners, and [1, 2, 3] is winners rank
  winnerRank: number;
};

export type LotteryData = {
  lotteryEntries: LotteryEntry[];
  drawExecuted: boolean;
};
