function parseDuration(durationString){
    const regex= /PT(\d+)H(\d+)M/;
    const found = durationString.match(regex);
    const hours = found[1];
    const minutes = found[2];
    const duration = `${hours}h ${minutes}m`;
    return duration;
}
export {parseDuration};