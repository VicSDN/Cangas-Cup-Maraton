import { defineDb, defineTable, column } from "astro:db";

const Team = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    location: column.text(),
    points: column.number(),
  },
});

const Player = defineTable({
  columns: {
    playerId: column.number({ primaryKey: true }),
    name: column.text(),
    secondName: column.text(),
    dni: column.text(),
    team: column.number({ references: () => Team.columns.id }),
  },
});

const Analitycs = defineTable({
  columns: {
    id: column.number({ references: () => Player.columns.playerId }),
    goal: column.number(),
    assist: column.number(),
    yellowCard: column.number(),
    redCard: column.number(),
    mvp: column.number(),
  },
});
// https://astro.build/db/config
export default defineDb({
  tables: {
    Team,
    Player,
    Analitycs,
  },
});
