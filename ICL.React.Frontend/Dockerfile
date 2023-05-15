# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base

WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

RUN apt-get update -yq && apt-get upgrade -yq && apt-get install -yq curl git vim
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -yq nodejs build-essential

COPY ["ICL.React.Frontend.csproj", "."]
RUN dotnet restore "./ICL.React.Frontend.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "ICL.React.Frontend.csproj" -c Release -o /app/build



FROM build AS publish
RUN dotnet publish "ICL.React.Frontend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ICL.React.Frontend.dll"]
