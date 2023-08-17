import Quadra from "./Quadra";
import { IAgenda } from "./interfaces/IAgenda";
import { IFutebol } from "./interfaces/IFutebol";

class QuadraFutebol extends Quadra {
    public futebolData: IFutebol = {
        chuteira: "Nike",
    }
    public reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
        const protocolo = "123456";
        return {
            protocolo,
            data: horaReserva,
            regras: this.futebolData as unknown as IFutebol,
        };
    }
}

export default QuadraFutebol;