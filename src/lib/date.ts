export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}

export function formatDateTime(dateString: string) {
    const date = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = Math.floor(
        (currentDate.getTime() - date.getTime()) / 1000,
    );

    if (timeDifference < 60) {
        return `${timeDifference} секунд назад`;
    } else if (timeDifference < 3600) {
        const minutesAgo = Math.floor(timeDifference / 60);
        return `${minutesAgo} ${formatRussianTimeUnit(
            minutesAgo,
            "минута",
            "минуты",
            "минут",
        )} назад`;
    } else if (timeDifference < 86400) {
        const hoursAgo = Math.floor(timeDifference / 3600);
        return `${hoursAgo} ${formatRussianTimeUnit(
            hoursAgo,
            "час",
            "часа",
            "часов",
        )} назад`;
    } else {
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
        const yyyy = date.getFullYear();
        const hh = String(date.getHours()).padStart(2, "0");
        const mmss =
            String(date.getMinutes()).padStart(2, "0") +
            ":" +
            String(date.getSeconds()).padStart(2, "0");
        return `${dd}.${mm}.${yyyy}, ${hh}:${mmss}`;
    }
}

function formatRussianTimeUnit(
    value: number,
    one: string,
    two: string,
    five: string,
) {
    value = Math.abs(value) % 100;
    const num = value % 10;

    if (value > 10 && value < 20) {
        return five;
    }

    if (num > 1 && num < 5) {
        return two;
    }

    if (num === 1) {
        return one;
    }

    return five;
}
