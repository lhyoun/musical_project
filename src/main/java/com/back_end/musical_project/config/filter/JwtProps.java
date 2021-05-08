package com.back_end.musical_project.config.filter;

public interface JwtProps {
	// public static final
	String secret = "비밀키";
	String auth = "Bearer ";
	String header = "Authorization";
}
