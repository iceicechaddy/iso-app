## Things left to do to have a MVP

### Scrimmage Tool

### UI/UX
- [ ] Thicken court lines
- [ ] Fix views for all devices
- [ ] OnResize() function for court and Events
- [x] Remove scrollbars from Events Component
- [ ] Set dynamic breakpoints for all sizes of devices
- [ ] Add error message for why no event shows up
- [ ] Add confirmation message on deleting of a player
- [ ] Remove need to "Submit" button when adding a player -- add automatically upon selection

### Deployment
- [x] Fix build errors
- [x] Choose hosting environment
- [ ] Setup subdomain

### Functionality
- [ ] Actions timeout if event is not triggered in enough time
- [ ] Undo/Remove event
- [ ] Export events to CSV
- [ ] Save info based on session user (page refresh should not remove data)
- [ ] Score determined based on court location (no need to choose whether it was a 3 PT or 2 PT)

### Homepage
- [ ] Create Basic Stat Overview Table broken down by player
      - if the player scored significantly differently than average in a given category (more than 50% compared to their practice average) then the box will be highlighted green or red (for improvement and getting worse, respectively)
      - stat category leaders can be highlighted in gold
