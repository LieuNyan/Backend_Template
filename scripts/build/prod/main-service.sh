set -e

ROOT_DIR=$(git rev-parse --show-toplevel)
cd "$ROOT_DIR"

IMAGE_NAME="backend-template/main-service"
TAG=$(git rev-parse --short HEAD)

docker build \
  -f apps/main-service/Dockerfile \
  -t ${IMAGE_NAME}:${TAG} \
  .