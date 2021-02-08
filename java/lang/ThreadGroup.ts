declare var Java: any;
import Class from './Class.js'
import Object from './Object.js'
import String from './String.js'
import Thread from './Thread.js'
import Thread$UncaughtExceptionHandler from './Thread$UncaughtExceptionHandler.js'
import Throwable from './Throwable.js'

export default interface ThreadGroup extends Object, Thread$UncaughtExceptionHandler {
	activeCount(): number;
	activeGroupCount(): number;
	allowThreadSuspension(arg0: boolean): boolean;
	checkAccess(): void;
	destroy(): void;
	enumerate(arg0: Array<Thread>): number;
	enumerate(arg0: Array<ThreadGroup>): number;
	enumerate(arg0: Array<ThreadGroup>, arg1: boolean): number;
	enumerate(arg0: Array<Thread>, arg1: boolean): number;
	getMaxPriority(): number;
	getName(): string;
	getParent(): ThreadGroup;
	interrupt(): void;
	isDaemon(): boolean;
	isDestroyed(): boolean;
	list(): void;
	parentOf(arg0: ThreadGroup): boolean;
	resume(): void;
	setDaemon(arg0: boolean): void;
	setMaxPriority(arg0: number): void;
	stop(): void;
	suspend(): void;
	uncaughtException(arg0: Thread, arg1: Throwable): void;
}

export default class ThreadGroup {
	public static get $javaClass(): any {
		return Java.type('java.lang.ThreadGroup');
	}
	public static $isInstance(obj: any): obj is ThreadGroup {
		return obj instanceof ThreadGroup.$javaClass;
	}

	constructor(arg0: string);
	constructor(arg0: ThreadGroup, arg1: string);
	constructor(...args: any[]) {
		return new ThreadGroup.$javaClass(...args);
	}

}

