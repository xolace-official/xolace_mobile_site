export interface CrisisResource {
  label: string
  numbers: { display: string; tel: string }[]
}

export const EMERGENCY_NUMBER = { display: "112", tel: "112" }
export const SUICIDE_HOTLINE = { display: "0244 471 279", tel: "+233244471279" }

export const CRISIS_RESOURCES: CrisisResource[] = [
  { label: "Emergency services", numbers: [EMERGENCY_NUMBER] },
  { label: "Suicide hotline", numbers: [SUICIDE_HOTLINE] },
  { label: "Police", numbers: [{ display: "191", tel: "191" }] },
  { label: "Ambulance", numbers: [{ display: "193", tel: "193" }] },
  {
    label: "Domestic Violence and Victims Support Unit (DOVVSU)",
    numbers: [
      { display: "18555 (toll free)", tel: "18555" },
      { display: "055 100 0900", tel: "+233551000900" },
    ],
  },
  {
    label: "Gender Studies and Human Rights Documentation Centre",
    numbers: [
      { display: "0302 760 688", tel: "+233302760688" },
      { display: "0302 760 687", tel: "+233302760687" },
    ],
  },
  {
    label: "Ministry of Gender, Children and Social Protection",
    numbers: [
      { display: "0302 688 181", tel: "+233302688181" },
      { display: "0302 688 187", tel: "+233302688187" },
      { display: "0302 688 184", tel: "+233302688184" },
    ],
  },
  {
    label: "Stop Abuse Ghana",
    numbers: [{ display: "0243 381 040", tel: "+233243381040" }],
  },
  {
    label: "The Ark Foundation",
    numbers: [{ display: "0243 777 773", tel: "+233243777773" }],
  },
]
