import { s as supabase } from './supabase_DGuu650d.mjs';

async function getPlayerById(id) {
  const { data: player, error } = await supabase.from("player").select("*").eq("id", id).single();
  if (error) {
    console.error("Error fetching player:", error);
    throw error;
  }
  return player;
}

async function getTeamById(id) {
  const { data: team, error } = await supabase.from("team").select("*").eq("id", id).single();
  if (error) {
    console.error("Error fetching team:", error);
    throw error;
  }
  return team;
}

export { getTeamById as a, getPlayerById as g };
