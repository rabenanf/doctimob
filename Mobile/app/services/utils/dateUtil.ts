export const convertToAmPm = (time: string): string => {
    const [hoursStr, minutesStr, secondsStr] = time.split(':');
    let hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

export const timeAgo = (dateStr: string): string => {
    const now = new Date();
    const past = new Date(dateStr);
    const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    const years = Math.floor(days / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
}

export const convertTo24Hour = (time12h: string): string => {
    const [time, modifier] = time12h.trim().split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier.toLowerCase() === 'pm' && hours < 12) {
        hours += 12;
    }
    if (modifier.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
    }

    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');

    return `${hoursStr}:${minutesStr}`;
};

export const getNext30MinuteSlotFormatted = (): string => {
    const now = new Date();
    const minutes = now.getMinutes();
    const nextMinutes = minutes < 30 ? 30 : 0;
    const nextHour = minutes < 30 ? now.getHours() : now.getHours() + 1;

    const date = new Date(now);
    date.setHours(nextHour);
    date.setMinutes(nextMinutes);
    date.setSeconds(0);
    date.setMilliseconds(0);

    // Format hh:mm AM/PM
    const hours = date.getHours();
    const minutesStr = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;

    return `${hours12}:${minutesStr} ${ampm}`;
};

export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',   // ex: Friday
        month: 'long',     // ex: March
        day: 'numeric',    // ex: 14
    });
};