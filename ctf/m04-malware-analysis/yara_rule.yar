rule TRIDENT_SHIELD_Beacon_Simulated
{
  meta:
    description = "Training-only signature for simulated Trident Shield beacon"
    author = "Summer School CTF"
    scenario = "TRIDENT SHIELD"
  strings:
    $s1 = "sync-mediterranean-control.example" ascii
    $s2 = "/api/v2/nav/beacon" ascii
    $s3 = "Global\\TridentCache" ascii
    $s4 = "FRAGO-219A.pdf" ascii
  condition:
    3 of them
}
