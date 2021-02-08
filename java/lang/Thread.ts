declare var Java: any;
import Class from './Class.js'
import ClassLoader from './ClassLoader.js'
import Map from '../../java/util/Map.js'
import Object from './Object.js'
import Runnable from './Runnable.js'
import StackTraceElement from './StackTraceElement.js'
import String from './String.js'
import Thread$State from './Thread$State.js'
import Thread$UncaughtExceptionHandler from './Thread$UncaughtExceptionHandler.js'
import ThreadGroup from './ThreadGroup.js'
import Throwable from './Throwable.js'

export default interface Thread extends Object, Runnable {
	checkAccess(): void;
	countStackFrames(): number;
	destroy(): void;
	getContextClassLoader(): ClassLoader;
	getId(): number;
	getName(): string;
	getPriority(): number;
	getStackTrace(): Array<StackTraceElement>;
	getState(): Thread$State;
	getThreadGroup(): ThreadGroup;
	getUncaughtExceptionHandler(): Thread$UncaughtExceptionHandler;
	interrupt(): void;
	isAlive(): boolean;
	isDaemon(): boolean;
	isInterrupted(): boolean;
	join(): void;
	join(arg0: number): void;
	join(arg0: number, arg1: number): void;
	resume(): void;
	run(): void;
	setContextClassLoader(arg0: ClassLoader): void;
	setDaemon(arg0: boolean): void;
	setName(arg0: string): void;
	setPriority(arg0: number): void;
	setUncaughtExceptionHandler(arg0: Thread$UncaughtExceptionHandler): void;
	start(): void;
	stop(): void;
	stop(arg0: Throwable): void;
	suspend(): void;
}

export default class Thread {
	public static get $javaClass(): any {
		return Java.type('java.lang.Thread');
	}
	public static $isInstance(obj: any): obj is Thread {
		return obj instanceof Thread.$javaClass;
	}

	constructor();
	constructor(arg0: Runnable);
	constructor(arg0: string);
	constructor(arg0: Runnable, arg1: string);
	constructor(arg0: ThreadGroup, arg1: string);
	constructor(arg0: ThreadGroup, arg1: Runnable);
	constructor(arg0: ThreadGroup, arg1: Runnable, arg2: string);
	constructor(arg0: ThreadGroup, arg1: Runnable, arg2: string, arg3: number);
	constructor(...args: any[]) {
		return new Thread.$javaClass(...args);
	}

	public static get MAX_PRIORITY(): number {
		return Thread.$javaClass.MAX_PRIORITY;
	}

	public static get MIN_PRIORITY(): number {
		return Thread.$javaClass.MIN_PRIORITY;
	}

	public static get NORM_PRIORITY(): number {
		return Thread.$javaClass.NORM_PRIORITY;
	}

	public static activeCount(): number;
	public static activeCount(...args: any[]): any {
		return Thread.$javaClass.activeCount(...args);
	}

	public static currentThread(): Thread;
	public static currentThread(...args: any[]): any {
		return Thread.$javaClass.currentThread(...args);
	}

	public static dumpStack(): void;
	public static dumpStack(...args: any[]): any {
		return Thread.$javaClass.dumpStack(...args);
	}

	public static enumerate(arg0: Array<Thread>): number;
	public static enumerate(...args: any[]): any {
		return Thread.$javaClass.enumerate(...args);
	}

	public static getAllStackTraces(): Map;
	public static getAllStackTraces(...args: any[]): any {
		return Thread.$javaClass.getAllStackTraces(...args);
	}

	public static getDefaultUncaughtExceptionHandler(): Thread$UncaughtExceptionHandler;
	public static getDefaultUncaughtExceptionHandler(...args: any[]): any {
		return Thread.$javaClass.getDefaultUncaughtExceptionHandler(...args);
	}

	public static holdsLock(arg0: Object): boolean;
	public static holdsLock(...args: any[]): any {
		return Thread.$javaClass.holdsLock(...args);
	}

	public static interrupted(): boolean;
	public static interrupted(...args: any[]): any {
		return Thread.$javaClass.interrupted(...args);
	}

	public static setDefaultUncaughtExceptionHandler(arg0: Thread$UncaughtExceptionHandler): void;
	public static setDefaultUncaughtExceptionHandler(...args: any[]): any {
		return Thread.$javaClass.setDefaultUncaughtExceptionHandler(...args);
	}

	public static sleep(arg0: number): void;
	public static sleep(arg0: number, arg1: number): void;
	public static sleep(...args: any[]): any {
		return Thread.$javaClass.sleep(...args);
	}

	public static _yield(): void;
	public static _yield(...args: any[]): any {
		return Thread.$javaClass.yield(...args);
	}

}

