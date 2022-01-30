import firebase from '@firebase/app';
import '@firebase/functions';
import { SetPhoneDto } from '../models/dto/set-phone-dto';
import { BaseResponseDto } from '../models/dto/response-dto';

// Callable function example
export const SetPhone = async (dto: SetPhoneDto) => {
    const func = firebase.app && firebase.app().functions && firebase!.app()!.functions!("europe-west3");
    if (func == null) {
        console.error("fun is null");
        return;
    }

    const functionRef = func.httpsCallable("UpdatePhoneCall");
    const { data } = await functionRef({ data: dto });
    console.log(data);

    return data as BaseResponseDto;
}

