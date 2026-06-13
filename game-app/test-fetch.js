import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://jkvgseraqdvnaoixpkqe.supabase.co', 'sb_publishable_ahWa9OVbTce2MOIjMUncxg_3ZtJwQkQ');
async function test() {
  const { data, error } = await supabase.from('questions').select('*').limit(1);
  console.log(data, error);
}
test();
