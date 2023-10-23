use rand::Rng;
pub fn roll_dice(d: &str) -> String {
    // Recibe una cadena como "2d20+2" y la lanza
    let mut d = d.to_string();
    if !d.contains('+') {
        d.push_str("+0");
    }

    let mut a = String::from("");
    let parts: Vec<&str> = d.split("d").collect();
    let dice = parts[0].parse::<i32>().unwrap();
    let mod_parts: Vec<&str> = parts[1].split('+').collect();
    let sides = mod_parts[0].parse::<i32>().unwrap();
    let mod_value = mod_parts[1].parse::<i32>().unwrap();
    let mut rng = rand::thread_rng();
    let mut total: i32 = 0;
    for x in 0..dice {
        let roll = rng.gen_range(1..sides + 1) + mod_value;
        total += roll;
        a.push_str(&format!("{}: {}({}+{}) ", x+1, roll, roll - mod_value, mod_value));
        a.push_str("<br>");
    }
    a = format!("Total: {} <> {}", total, a);
    return a;
}