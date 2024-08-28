export default function truncateText(text: string, maxLength: number = 60): string {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...'
    }

    return text
}
