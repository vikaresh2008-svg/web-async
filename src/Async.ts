export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

export async function getData(): Promise<number[]> {
    const promise1 = mock(100);
    const promise2 = mock(200);
    const promise3 = mock(300);

    const result = await Promise.all([promise1, promise2, promise3]);

    return result;
}

export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err: any) {
        return err.message;
    }
}
