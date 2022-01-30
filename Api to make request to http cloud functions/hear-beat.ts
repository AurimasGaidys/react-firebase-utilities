import { interval } from 'rxjs';
import { HeartBeatCall } from './api-service';
import { LocationService } from './location-service';

const ls = LocationService.getInstance();

export const StartHeartBeat = () => {
    const source = interval(60 * 1000);
    const subscribe = source.subscribe(val => executeHeartBeat(val));
}

const executeHeartBeat = async (hearBeatId: number) => {
    // get location
    const location = ls.getLocation();
    const resp = await HeartBeatCall({ id: "fb-" + hearBeatId, location: { latitude: location.coords.latitude, longitude: location.coords.longitude } })
    // console.warn("hearBeatId", hearBeatId, location?.coords.latitude, location?.coords.longitude);
}
