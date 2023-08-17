import { IAgenda } from "./interfaces/IAgenda";

abstract class Quadra {
    protected abstract reservar<T>(horaReserva: Date): IAgenda<T>;
}

export default Quadra;