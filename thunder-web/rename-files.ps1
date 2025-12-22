# Rename files in public directory to remove special characters
$publicDir = ".\public"

# Define rename mappings (old name -> new name)
$renames = @{
    "Draw your Mutuals OCs!B#furry #furryart #furrymeme.webp" = "mutuals-ocs.webp"
    "Draw your Mutuals PFP! -33#furry #furryfandom  #furrymeme.webp" = "mutuals-pfp-1.webp"
    "Draw your Mutuals PFP! [PART 3].jpg" = "mutuals-pfp-3.jpg"
    "Draw your Mutuals PFP! [Part 2] -3Bwhahahahahhagaghshahahahahaha#furryart #furrymemes #furry.webp" = "mutuals-pfp-2.webp"
    "Draw your Mutuals sonas![🤓 edition]#furry #furryart #furrymeme #furryfandom #furrycommunity.webp" = "mutuals-sonas.webp"
    "EARS#furryart #furry #furries #furrymeme.mp4" = "ears.mp4"
    "GET OFF MY PORCH(🐶 @shepgoesblep)#furry #furryart #furrymeme #furryfandom #furries #getoffmypor.mp4" = "get-off-my-porch.mp4"
    "Problem 🐔#furry #furryfandom #furrymemes.mp4" = "problem.mp4"
    "QUICKIE- why birbs dont wear leashes! 😤#furry #furrymeme.mp4" = "birbs-leashes.mp4"
    "Quickie- Some AAAutumn Birb Doodles!~ 🍂#furry #furryart #furryfandom #furrymemes #furries #ovo!.mp4" = "autumn-birb.mp4"
    "some @parsenoire doodles!!! 🟣#furry #furryart #furries #sus.jpg" = "parsenoire-doodles.jpg"
    "🥚😋✨~(YCH meeeeeme!!!!)#furryart #furrymeme #furry.mp4" = "egg-ych.mp4"
    "🦝!!!(4 @.Happyraccoons on twitter);#furryart #furry #furrymeme.mp4" = "raccoon.mp4"
}

foreach ($old in $renames.Keys) {
    $new = $renames[$old]
    $oldPath = Join-Path $publicDir $old
    $newPath = Join-Path $publicDir $new
    
    if (Test-Path $oldPath) {
        Rename-Item -Path $oldPath -NewName $new -Force
        Write-Host "Renamed: $old -> $new"
    } else {
        Write-Host "File not found: $old" -ForegroundColor Yellow
    }
}

Write-Host "`nRenaming complete!" -ForegroundColor Green
