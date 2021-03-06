// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/nodemailer-direct-transport/nodemailer-direct-transport.d.ts
declare module "nodemailer-direct-transport" {

	namespace directTransport {

		export interface AuthOptions {
			user?: string;
			pass?: string;
			xoauth2?: any;
		}

		export interface DirectOptions {
			/**
			 * optional hostname of the client, used for identifying to the server
			 */
			name?: string;
			/**
			 * if true, the connection emits all traffic between client and server as 'log' events
			 */
			debug?: boolean;
		}
	}

	function directTransport(options: directTransport.DirectOptions): nodemailer.Transport;

	export = directTransport;

}