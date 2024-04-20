export const config = {
  wardName: "Sycamores Stake Young Men",
  apiUrl: "https://api.latterdayward.com/api",
  apiWard: "sycamores-stake-ym",
  apiHeaders: {
    headers: {
      "x-api-key": process.env.LDW_KEY,
      "Content-Type": "application/json",
    },
  },
  pages: {
    index: {
      heroCardId: "6623fd0ef50a146457c7174c",
    },
  },
  httpHeaders: {
    "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
  },
}