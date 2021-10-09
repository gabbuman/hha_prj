from backend.models import RehabMonthlyRecord
from rest_framework import serializers
from backend.models import MaternityMonthlyRecord, MonthlyRecord, CustomUser
from rest_framework.validators import UniqueValidator

#Monthly Record Serializer
class MonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyRecord
        fields = '__all__'

# Rehab Monthly Record Serializer
class RehabMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = RehabMonthlyRecord
        fields = '__all__'

# Maternity Monthly Record Serializer
class MaternityMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaternityMonthlyRecord
        fields = '__all__'         

# CustomerUser Serializer
class CustomUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        required=False,
        allow_blank=True,
        allow_null=True,
        validators=[
            UniqueValidator(
                queryset=CustomUser.objects.all(),
                message="This username is already taken!",
            )
        ],
    )
    
    password = serializers.CharField(min_length=8, write_only=True, required=True)
    class Meta:
        model = CustomUser
        fields = ("username", "password")
        extra_kwargs = {
            "password": {"write_only": True},
        }

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(
            **validated_data
        )
        if password is not None:
            instance.set_password(password)
        instance.save()
        
        return instance