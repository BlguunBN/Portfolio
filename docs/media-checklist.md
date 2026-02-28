# Project Media Asset Handoff Checklist

This checklist defines the exact placeholder media files expected by the portfolio project data and project-detail gallery.

## Folder layout

```txt
public/
  projects/
    message-reply/
    apod/
```

## Required assets

| Project | Filename | Type | Recommended size | Aspect ratio | Notes |
| --- | --- | --- | --- | --- | --- |
| Message Reply | `message-reply-inbox.png` | PNG screenshot | 1920x1080 | 16:9 | Main inbox or conversation overview |
| Message Reply | `message-reply-suggestion.png` | PNG screenshot | 1920x1080 | 16:9 | Suggestion panel / AI assist state |
| Message Reply | `message-reply-send-flow.gif` | GIF | 1280x720 | 16:9 | End-to-end send flow interaction |
| APOD | `apod-landing.png` | PNG screenshot | 1920x1080 | 16:9 | Home view with current astronomy image |
| APOD | `apod-date-picker.gif` | GIF | 1280x720 | 16:9 | Date navigation / picker interaction |

## Naming + export rules

- Keep names exact (case-sensitive) to match code references.
- Prefer compressed PNG (screenshots) and optimized GIF (short loops, <= 8s).
- Keep text readable at laptop widths.
- Avoid sensitive personal data in captures.

## QA before handoff

- [ ] All required filenames exist in the correct folders.
- [ ] Images are exported at or above recommended size.
- [ ] GIF loops cleanly and demonstrates the intended flow.
- [ ] No private tokens, emails, or personal identifiers visible.
- [ ] `npm run build` passes after dropping in the real media files.
